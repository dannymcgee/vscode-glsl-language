/**
 * perform a lookup of a single texel within a texture with an offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param lod If present, specifies the level-of-detail within the texture from which the texel will be fetched. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
vec4 texelFetchOffset( sampler1D sampler, int P, int lod, int offset ) {}

/**
 * perform a lookup of a single texel within a texture with an offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param lod If present, specifies the level-of-detail within the texture from which the texel will be fetched. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
ivec4 texelFetchOffset( isampler1D sampler, int P, int lod, int offset ) {}

/**
 * perform a lookup of a single texel within a texture with an offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param lod If present, specifies the level-of-detail within the texture from which the texel will be fetched. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
uvec4 texelFetchOffset( usampler1D sampler, int P, int lod, int offset ) {}

/**
 * perform a lookup of a single texel within a texture with an offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param lod If present, specifies the level-of-detail within the texture from which the texel will be fetched. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
vec4 texelFetchOffset( sampler2D sampler, ivec2 P, int lod, ivec2 offset ) {}

/**
 * perform a lookup of a single texel within a texture with an offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param lod If present, specifies the level-of-detail within the texture from which the texel will be fetched. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
ivec4 texelFetchOffset( isampler2D sampler, ivec2 P, int lod, ivec2 offset ) {}

/**
 * perform a lookup of a single texel within a texture with an offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param lod If present, specifies the level-of-detail within the texture from which the texel will be fetched. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
uvec4 texelFetchOffset( usampler2D sampler, ivec2 P, int lod, ivec2 offset ) {}

/**
 * perform a lookup of a single texel within a texture with an offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param lod If present, specifies the level-of-detail within the texture from which the texel will be fetched. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
vec4 texelFetchOffset( sampler3D sampler, ivec3 P, int lod, ivec3 offset ) {}

/**
 * perform a lookup of a single texel within a texture with an offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param lod If present, specifies the level-of-detail within the texture from which the texel will be fetched. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
ivec4 texelFetchOffset( isampler3D sampler, ivec3 P, int lod, ivec3 offset ) {}

/**
 * perform a lookup of a single texel within a texture with an offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param lod If present, specifies the level-of-detail within the texture from which the texel will be fetched. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
uvec4 texelFetchOffset( usampler3D sampler, ivec3 P, int lod, ivec3 offset ) {}

/**
 * perform a lookup of a single texel within a texture with an offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
vec4 texelFetchOffset( sampler2DRect sampler, ivec2 P, ivec2 offset ) {}

/**
 * perform a lookup of a single texel within a texture with an offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
ivec4 texelFetchOffset( isampler2DRect sampler, ivec2 P, ivec2 offset ) {}

/**
 * perform a lookup of a single texel within a texture with an offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
uvec4 texelFetchOffset( usampler2DRect sampler, ivec2 P, ivec2 offset ) {}

/**
 * perform a lookup of a single texel within a texture with an offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param lod If present, specifies the level-of-detail within the texture from which the texel will be fetched. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
vec4 texelFetchOffset( sampler1DArray sampler, ivec2 P, int lod, ivec2 offset ) {}

/**
 * perform a lookup of a single texel within a texture with an offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param lod If present, specifies the level-of-detail within the texture from which the texel will be fetched. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
ivec4 texelFetchOffset( isampler1DArray sampler, ivec2 P, int lod, ivec2 offset ) {}

/**
 * perform a lookup of a single texel within a texture with an offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param lod If present, specifies the level-of-detail within the texture from which the texel will be fetched. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
uvec4 texelFetchOffset( usampler1DArray sampler, ivec2 P, int lod, ivec2 offset ) {}

/**
 * perform a lookup of a single texel within a texture with an offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param lod If present, specifies the level-of-detail within the texture from which the texel will be fetched. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
vec4 texelFetchOffset( sampler2DArray sampler, ivec3 P, int lod, ivec3 offset ) {}

/**
 * perform a lookup of a single texel within a texture with an offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param lod If present, specifies the level-of-detail within the texture from which the texel will be fetched. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
ivec4 texelFetchOffset( isampler2DArray sampler, ivec3 P, int lod, ivec3 offset ) {}

/**
 * perform a lookup of a single texel within a texture with an offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param lod If present, specifies the level-of-detail within the texture from which the texel will be fetched. 
 * @param offset Specifies offset, in texels that will be applied to  before looking up the texel. 
 */
uvec4 texelFetchOffset( usampler2DArray sampler, ivec3 P, int lod, ivec3 offset ) {}

