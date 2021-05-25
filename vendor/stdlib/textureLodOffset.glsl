/**
 * perform a texture lookup with explicit level-of-detail and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which the texture will be sampled. 
 * @param lod Specifies the explicit level-of-detail from which texels will be fetched. 
 * @param offset Specifies the offset that will be applied to  before texels are fetched. 
 */
vec4 textureLodOffset( sampler1D sampler, float P, float lod, int offset ) {}

/**
 * perform a texture lookup with explicit level-of-detail and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which the texture will be sampled. 
 * @param lod Specifies the explicit level-of-detail from which texels will be fetched. 
 * @param offset Specifies the offset that will be applied to  before texels are fetched. 
 */
ivec4 textureLodOffset( isampler1D sampler, float P, float lod, int offset ) {}

/**
 * perform a texture lookup with explicit level-of-detail and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which the texture will be sampled. 
 * @param lod Specifies the explicit level-of-detail from which texels will be fetched. 
 * @param offset Specifies the offset that will be applied to  before texels are fetched. 
 */
uvec4 textureLodOffset( usampler1D sampler, float P, float lod, int offset ) {}

/**
 * perform a texture lookup with explicit level-of-detail and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which the texture will be sampled. 
 * @param lod Specifies the explicit level-of-detail from which texels will be fetched. 
 * @param offset Specifies the offset that will be applied to  before texels are fetched. 
 */
vec4 textureLodOffset( sampler2D sampler, vec2 P, float lod, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit level-of-detail and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which the texture will be sampled. 
 * @param lod Specifies the explicit level-of-detail from which texels will be fetched. 
 * @param offset Specifies the offset that will be applied to  before texels are fetched. 
 */
ivec4 textureLodOffset( isampler2D sampler, vec2 P, float lod, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit level-of-detail and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which the texture will be sampled. 
 * @param lod Specifies the explicit level-of-detail from which texels will be fetched. 
 * @param offset Specifies the offset that will be applied to  before texels are fetched. 
 */
uvec4 textureLodOffset( usampler2D sampler, vec2 P, float lod, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit level-of-detail and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which the texture will be sampled. 
 * @param lod Specifies the explicit level-of-detail from which texels will be fetched. 
 * @param offset Specifies the offset that will be applied to  before texels are fetched. 
 */
vec4 textureLodOffset( sampler3D sampler, vec3 P, float lod, ivec3 offset ) {}

/**
 * perform a texture lookup with explicit level-of-detail and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which the texture will be sampled. 
 * @param lod Specifies the explicit level-of-detail from which texels will be fetched. 
 * @param offset Specifies the offset that will be applied to  before texels are fetched. 
 */
ivec4 textureLodOffset( isampler3D sampler, vec3 P, float lod, ivec3 offset ) {}

/**
 * perform a texture lookup with explicit level-of-detail and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which the texture will be sampled. 
 * @param lod Specifies the explicit level-of-detail from which texels will be fetched. 
 * @param offset Specifies the offset that will be applied to  before texels are fetched. 
 */
uvec4 textureLodOffset( usampler3D sampler, vec3 P, float lod, ivec3 offset ) {}

/**
 * perform a texture lookup with explicit level-of-detail and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which the texture will be sampled. 
 * @param lod Specifies the explicit level-of-detail from which texels will be fetched. 
 * @param offset Specifies the offset that will be applied to  before texels are fetched. 
 */
float textureLodOffset( sampler1DShadow sampler, vec3 P, float lod, int offset ) {}

/**
 * perform a texture lookup with explicit level-of-detail and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which the texture will be sampled. 
 * @param lod Specifies the explicit level-of-detail from which texels will be fetched. 
 * @param offset Specifies the offset that will be applied to  before texels are fetched. 
 */
float textureLodOffset( sampler2DShadow sampler, vec3 P, float lod, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit level-of-detail and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which the texture will be sampled. 
 * @param lod Specifies the explicit level-of-detail from which texels will be fetched. 
 * @param offset Specifies the offset that will be applied to  before texels are fetched. 
 */
vec4 textureLodOffset( sampler1DArray sampler, vec2 P, float lod, int offset ) {}

/**
 * perform a texture lookup with explicit level-of-detail and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which the texture will be sampled. 
 * @param lod Specifies the explicit level-of-detail from which texels will be fetched. 
 * @param offset Specifies the offset that will be applied to  before texels are fetched. 
 */
ivec4 textureLodOffset( isampler1DArray sampler, vec2 P, float lod, int offset ) {}

/**
 * perform a texture lookup with explicit level-of-detail and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which the texture will be sampled. 
 * @param lod Specifies the explicit level-of-detail from which texels will be fetched. 
 * @param offset Specifies the offset that will be applied to  before texels are fetched. 
 */
uvec4 textureLodOffset( usampler1DArray sampler, vec2 P, float lod, int offset ) {}

/**
 * perform a texture lookup with explicit level-of-detail and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which the texture will be sampled. 
 * @param lod Specifies the explicit level-of-detail from which texels will be fetched. 
 * @param offset Specifies the offset that will be applied to  before texels are fetched. 
 */
vec4 textureLodOffset( sampler2DArray sampler, vec3 P, float lod, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit level-of-detail and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which the texture will be sampled. 
 * @param lod Specifies the explicit level-of-detail from which texels will be fetched. 
 * @param offset Specifies the offset that will be applied to  before texels are fetched. 
 */
ivec4 textureLodOffset( isampler2DArray sampler, vec3 P, float lod, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit level-of-detail and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which the texture will be sampled. 
 * @param lod Specifies the explicit level-of-detail from which texels will be fetched. 
 * @param offset Specifies the offset that will be applied to  before texels are fetched. 
 */
uvec4 textureLodOffset( usampler2DArray sampler, vec3 P, float lod, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit level-of-detail and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which the texture will be sampled. 
 * @param lod Specifies the explicit level-of-detail from which texels will be fetched. 
 * @param offset Specifies the offset that will be applied to  before texels are fetched. 
 */
float textureLodOffset( sampler1DArrayShadow sampler, vec3 P, float lod, int offset ) {}

