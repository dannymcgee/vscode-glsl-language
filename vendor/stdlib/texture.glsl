/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
vec4 texture( sampler1D sampler, float P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
ivec4 texture( isampler1D sampler, float P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
uvec4 texture( usampler1D sampler, float P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
vec4 texture( sampler2D sampler, vec2 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
ivec4 texture( isampler2D sampler, vec2 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
uvec4 texture( usampler2D sampler, vec2 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
vec4 texture( sampler3D sampler, vec3 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
ivec4 texture( isampler3D sampler, vec3 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
uvec4 texture( usampler3D sampler, vec3 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
vec4 texture( samplerCube sampler, vec3 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
ivec4 texture( isamplerCube sampler, vec3 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
uvec4 texture( usamplerCube sampler, vec3 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
float texture( sampler1DShadow sampler, vec3 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
float texture( sampler2DShadow sampler, vec3 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
float texture( samplerCubeShadow sampler, vec4 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
vec4 texture( sampler1DArray sampler, vec2 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
ivec4 texture( isampler1DArray sampler, vec2 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
uvec4 texture( usampler1DArray sampler, vec2 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
vec4 texture( sampler2DArray sampler, vec3 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
ivec4 texture( isampler2DArray sampler, vec3 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
uvec4 texture( usampler2DArray sampler, vec3 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
vec4 texture( samplerCubeArray sampler, vec4 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
ivec4 texture( isamplerCubeArray sampler, vec4 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
uvec4 texture( usamplerCubeArray sampler, vec4 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
float texture( sampler1DArrayShadow sampler, vec3 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
float texture( sampler2DArrayShadow sampler, vec4 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
float texture( isampler2DArrayShadow sampler, vec4 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param bias Specifies an optional bias to be applied during level-of-detail computation. 
 */
float texture( usampler2DArrayShadow sampler, vec4 P, [float ] bias ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
vec4 texture( sampler2DRect sampler, vec2 P ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
ivec4 texture( isampler2DRect sampler, vec2 P ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
uvec4 texture( usampler2DRect sampler, vec2 P ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
float texture( sampler2DRectShadow sampler, vec3 P ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param compare Specifies the value to which the fetched texel will be compared when sampling from . 
 */
float texture( samplerCubeArrayShadow sampler, vec4 P, float compare ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param compare Specifies the value to which the fetched texel will be compared when sampling from . 
 */
float texture( isamplerCubeArrayShadow sampler, vec4 P, float compare ) {}

/**
 * retrieves texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param compare Specifies the value to which the fetched texel will be compared when sampling from . 
 */
float texture( usamplerCubeArrayShadow sampler, vec4 P, float compare ) {}

