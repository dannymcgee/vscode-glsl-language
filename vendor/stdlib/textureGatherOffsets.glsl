/**
 * gathers four texels from a texture with an array of offsets
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
vec4 textureGatherOffsets( sampler2D sampler, vec2 P ) {}

/**
 * gathers four texels from a texture with an array of offsets
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
ivec4 textureGatherOffsets( isampler2D sampler, vec2 P ) {}

/**
 * gathers four texels from a texture with an array of offsets
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
uvec4 textureGatherOffsets( usampler2D sampler, vec2 P ) {}

/**
 * gathers four texels from a texture with an array of offsets
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
vec4 textureGatherOffsets( sampler2DArray sampler, vec3 P ) {}

/**
 * gathers four texels from a texture with an array of offsets
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
ivec4 textureGatherOffsets( isampler2DArray sampler, vec3 P ) {}

/**
 * gathers four texels from a texture with an array of offsets
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
uvec4 textureGatherOffsets( usampler2DArray sampler, vec3 P ) {}

/**
 * gathers four texels from a texture with an array of offsets
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
vec4 textureGatherOffsets( sampler2DRect sampler, vec3 P ) {}

/**
 * gathers four texels from a texture with an array of offsets
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
ivec4 textureGatherOffsets( isampler2DRect sampler, vec3 P ) {}

/**
 * gathers four texels from a texture with an array of offsets
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
uvec4 textureGatherOffsets( usampler2DRect sampler, vec3 P ) {}

/**
 * gathers four texels from a texture with an array of offsets
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGatherOffsets( sampler2DShadow sampler, vec2 P, float refZ ) {}

/**
 * gathers four texels from a texture with an array of offsets
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGatherOffsets( isampler2DShadow sampler, vec2 P, float refZ ) {}

/**
 * gathers four texels from a texture with an array of offsets
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGatherOffsets( usampler2DShadow sampler, vec2 P, float refZ ) {}

/**
 * gathers four texels from a texture with an array of offsets
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGatherOffsets( sampler2DArrayShadow sampler, vec3 P, float refZ ) {}

/**
 * gathers four texels from a texture with an array of offsets
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGatherOffsets( isampler2DArrayShadow sampler, vec3 P, float refZ ) {}

/**
 * gathers four texels from a texture with an array of offsets
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGatherOffsets( usampler2DArrayShadow sampler, vec3 P, float refZ ) {}

/**
 * gathers four texels from a texture with an array of offsets
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGatherOffsets( sampler2DRectShadow sampler, vec3 P, float refZ ) {}

/**
 * gathers four texels from a texture with an array of offsets
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGatherOffsets( isampler2DRectShadow sampler, vec3 P, float refZ ) {}

/**
 * gathers four texels from a texture with an array of offsets
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGatherOffsets( usampler2DRectShadow sampler, vec3 P, float refZ ) {}

