/**
 * gathers four texels from a texture with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies the offset from the specified texture coordinate  from which the texels will be gathered. 
 */
vec4 textureGatherOffset( sampler2D sampler, vec2 P, ivec2 offset ) {}

/**
 * gathers four texels from a texture with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies the offset from the specified texture coordinate  from which the texels will be gathered. 
 */
ivec4 textureGatherOffset( isampler2D sampler, vec2 P, ivec2 offset ) {}

/**
 * gathers four texels from a texture with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies the offset from the specified texture coordinate  from which the texels will be gathered. 
 */
uvec4 textureGatherOffset( usampler2D sampler, vec2 P, ivec2 offset ) {}

/**
 * gathers four texels from a texture with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies the offset from the specified texture coordinate  from which the texels will be gathered. 
 */
vec4 textureGatherOffset( sampler2DArray sampler, vec3 P, ivec2 offset ) {}

/**
 * gathers four texels from a texture with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies the offset from the specified texture coordinate  from which the texels will be gathered. 
 */
ivec4 textureGatherOffset( isampler2DArray sampler, vec3 P, ivec2 offset ) {}

/**
 * gathers four texels from a texture with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies the offset from the specified texture coordinate  from which the texels will be gathered. 
 */
uvec4 textureGatherOffset( usampler2DArray sampler, vec3 P, ivec2 offset ) {}

/**
 * gathers four texels from a texture with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies the offset from the specified texture coordinate  from which the texels will be gathered. 
 */
vec4 textureGatherOffset( sampler2DRect sampler, vec3 P, ivec2 offset ) {}

/**
 * gathers four texels from a texture with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies the offset from the specified texture coordinate  from which the texels will be gathered. 
 */
ivec4 textureGatherOffset( isampler2DRect sampler, vec3 P, ivec2 offset ) {}

/**
 * gathers four texels from a texture with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param offset Specifies the offset from the specified texture coordinate  from which the texels will be gathered. 
 */
uvec4 textureGatherOffset( usampler2DRect sampler, vec3 P, ivec2 offset ) {}

/**
 * gathers four texels from a texture with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 * @param offset Specifies the offset from the specified texture coordinate  from which the texels will be gathered. 
 */
vec4 textureGatherOffset( sampler2DShadow sampler, vec2 P, float refZ, ivec2 offset ) {}

/**
 * gathers four texels from a texture with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 * @param offset Specifies the offset from the specified texture coordinate  from which the texels will be gathered. 
 */
vec4 textureGatherOffset( isampler2DShadow sampler, vec2 P, float refZ, ivec2 offset ) {}

/**
 * gathers four texels from a texture with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 * @param offset Specifies the offset from the specified texture coordinate  from which the texels will be gathered. 
 */
vec4 textureGatherOffset( usampler2DShadow sampler, vec2 P, float refZ, ivec2 offset ) {}

/**
 * gathers four texels from a texture with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 * @param offset Specifies the offset from the specified texture coordinate  from which the texels will be gathered. 
 */
vec4 textureGatherOffset( sampler2DArrayShadow sampler, vec3 P, float refZ, ivec2 offset ) {}

/**
 * gathers four texels from a texture with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 * @param offset Specifies the offset from the specified texture coordinate  from which the texels will be gathered. 
 */
vec4 textureGatherOffset( isampler2DArrayShadow sampler, vec3 P, float refZ, ivec2 offset ) {}

/**
 * gathers four texels from a texture with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 * @param offset Specifies the offset from the specified texture coordinate  from which the texels will be gathered. 
 */
vec4 textureGatherOffset( usampler2DArrayShadow sampler, vec3 P, float refZ, ivec2 offset ) {}

/**
 * gathers four texels from a texture with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 * @param offset Specifies the offset from the specified texture coordinate  from which the texels will be gathered. 
 */
vec4 textureGatherOffset( sampler2DRectShadow sampler, vec3 P, float refZ, ivec2 offset ) {}

/**
 * gathers four texels from a texture with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 * @param offset Specifies the offset from the specified texture coordinate  from which the texels will be gathered. 
 */
vec4 textureGatherOffset( isampler2DRectShadow sampler, vec3 P, float refZ, ivec2 offset ) {}

/**
 * gathers four texels from a texture with offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 * @param offset Specifies the offset from the specified texture coordinate  from which the texels will be gathered. 
 */
vec4 textureGatherOffset( usampler2DRectShadow sampler, vec3 P, float refZ, ivec2 offset ) {}

