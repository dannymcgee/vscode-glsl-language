#define MAX_STEPS       100
#define MAX_DIST        100.0
#define SURF_THRESHOLD    0.01
#define MAX_OCCL_DIST     0.333


/**
 * Measure the distance from `p` to the nearest scene object
 *
 * @example
 * ```
 * float dist = distToScene( vec3(1,1,1) );
 * ```
 */
float distToScene( vec3 p ) {
	vec4  sphere       = vec4(0, 1.2, 7.5, 1.5); // x, y, z, r
	float distToSphere = length(p - sphere.xyz) - sphere.w;
	float distToPlane  = p.y + 1.0; // Ground plane

	return min(distToSphere, distToPlane);
}


/**
 * Lorem ipsum dolor sit amet
 * @param ro Ray origin (camera pos)
 * @param rd Ray direction
 */
float rayMarch( vec3 ro, vec3 rd ) {
	float distFromOrigin = 0.;

	for ( int i = 0; i < MAX_STEPS; i++ ) {
		vec3  point = ro + distFromOrigin * rd;
		float dS    = distToScene( point );

		distFromOrigin += dS;

		if (dS < SURF_THRESHOLD || distFromOrigin > MAX_DIST)
			break;
	}

	return distFromOrigin;
}


/**
 * Linearly interpolate between two values
 */
float lerp( float minVal, float maxVal, float t ) {
	return minVal * (1.0 - t) + (maxVal * t);
}


/**
 * Normalizes an arbitrary `value` between `min` and `max`
 */
float normalizeFloat( float minVal, float maxVal, float value ) {
	float range = maxVal - minVal;

	return value / range;
}


/**
 * Calculates the normal of a surface point
 */
vec3 sampleNormal( vec3 point ) {
	float dS     = distToScene( point );
	vec2  offset = vec2( 0.01, 0 );
	vec3  n      = dS - vec3(
		distToScene( point - offset.xyy ),
		distToScene( point - offset.yxy ),
		distToScene( point - offset.yyx )
	);

	return normalize( n );
}


/**
 * Calculates the diffuse value of a surface point
 */
float getLight( vec3 surf ) {
	vec3  ro  = vec3( -1, 5, 5 );
	ro.xz    += vec2( sin( iTime ), cos( iTime )) * 2.0;

	vec3  rd  = normalize( ro - surf );
	vec3  n   = sampleNormal( surf );

	float dif = clamp( dot( n, rd ), 0.0, 1.0 );
	float dS  = rayMarch( surf + n * SURF_THRESHOLD * 2.0, rd );

	if (dS < length( ro - surf ))
		dif *= 0.1;

	return dif;
}


float fillLight( vec3 surf ) {
	vec3 ro = vec3( 0, 0, 0 );
	vec3 rd = normalize( ro - surf );
	vec3 n  = sampleNormal( surf );

	return clamp( dot( n, rd ), 0.0, 0.1 );
}


float occlusion( vec3 surf ) {
	// vec3 lightPos = vec3( -1, 5, 5 );

	float dG = rayMarch( surf, vec3( 0, -1, 0 ));
	float dS = rayMarch( surf, vec3( 0, 1, 0 ));
	float d  = min( dG, dS );
	// float n  = sampleNormal( surf );

	// float aG = clamp( dot( n, vec3( 0, -1, 0 ));
	// float aS = clamp( dot( n,
	return normalizeFloat( 0.0, MAX_OCCL_DIST, d );
	// return 1.0 - d;
}


void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
	vec2  uv   = ( fragCoord - 0.5 * iResolution.xy ) / iResolution.y;
	vec3  col  = vec3( 0 );

	vec3  ro   = vec3( 0, 1, 0 );
	vec3  rd   = normalize( vec3( uv.x, uv.y, 1 ));
	float dS   = rayMarch( ro, rd );
	vec3  srf  = ro + rd * dS;

	float dif  = getLight( srf );
	col        = vec3( dif );

	float fil  = fillLight( srf );
	col        = clamp( dif + vec3( fil ), 0.0, 1.0 );

	// Color correction
	col       *= vec3( 0.9, 0.95, 1.0 );

	fragColor = vec4( col, 1.0 );

	// lol psychadelic
	// dS  = 1.0 - normalizeFloat( 0.0, 50.0, rayMarch( ro, rd ));
	// vec2  sc  = fragCoord / iResolution.xy;
	// fragColor = vec4( vec3( sc, 1.0 - sc ) * vec3( dS ) * 2.0, 1.0 );
}
