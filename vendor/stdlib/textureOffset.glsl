/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
vec4 textureOffset( sampler1D sampler, float P, int offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
ivec4 textureOffset( isampler1D sampler, float P, int offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
uvec4 textureOffset( usampler1D sampler, float P, int offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
vec4 textureOffset( sampler2D sampler, vec2 P, ivec2 offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
ivec4 textureOffset( isampler2D sampler, vec2 P, ivec2 offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
uvec4 textureOffset( usampler2D sampler, vec2 P, ivec2 offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
vec4 textureOffset( sampler3D sampler, vec3 P, ivec3 offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
ivec4 textureOffset( isampler3D sampler, vec3 P, ivec3 offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
uvec4 textureOffset( usampler3D sampler, vec3 P, ivec3 offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
vec4 textureOffset( sampler2DRect sampler, vec2 P, ivec2 offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
ivec4 textureOffset( isampler2DRect sampler, vec2 P, ivec2 offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
uvec4 textureOffset( usampler2DRect sampler, vec2 P, ivec2 offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
float textureOffset( sampler2DRectShadow sampler, vec3 P, ivec2 offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
float textureOffset( sampler1DShadow sampler, vec3 P, int offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
float textureOffset( sampler2DShadow sampler, vec4 P, ivec2 offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
vec4 textureOffset( sampler1DArray sampler, vec2 P, int offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
ivec4 textureOffset( isampler1DArray sampler, vec2 P, int offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
uvec4 textureOffset( usampler1DArray sampler, vec2 P, int offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
vec4 textureOffset( sampler2DArray sampler, vec3 P, ivec2 offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
ivec4 textureOffset( isampler2DArray sampler, vec3 P, ivec2 offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
uvec4 textureOffset( usampler2DArray sampler, vec3 P, ivec2 offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
float textureOffset( sampler1DArrayShadow sampler, vec3 P, int offset )

/**
 * perform a texture lookup with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
float textureOffset( sampler2DArrayShadow sampler, vec4 P, vec2 offset )

