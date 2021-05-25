/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
vec4 textureGather( sampler2D sampler, vec2 P ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
ivec4 textureGather( isampler2D sampler, vec2 P ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
uvec4 textureGather( usampler2D sampler, vec2 P ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
vec4 textureGather( sampler2DArray sampler, vec3 P ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
ivec4 textureGather( isampler2DArray sampler, vec3 P ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
uvec4 textureGather( usampler2DArray sampler, vec3 P ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
vec4 textureGather( samplerCube sampler, vec3 P ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
ivec4 textureGather( isamplerCube sampler, vec3 P ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
uvec4 textureGather( usamplerCube sampler, vec3 P ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
vec4 textureGather( samplerCubeArray sampler, vec4 P ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
ivec4 textureGather( isamplerCubeArray sampler, vec4 P ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
uvec4 textureGather( usamplerCubeArray sampler, vec4 P ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
vec4 textureGather( sampler2DRect sampler, vec3 P ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
ivec4 textureGather( isampler2DRect sampler, vec3 P ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 */
uvec4 textureGather( usampler2DRect sampler, vec3 P ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGather( sampler2DShadow sampler, vec2 P, float refZ ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGather( isampler2DShadow sampler, vec2 P, float refZ ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGather( usampler2DShadow sampler, vec2 P, float refZ ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGather( sampler2DArrayShadow sampler, vec3 P, float refZ ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGather( isampler2DArrayShadow sampler, vec3 P, float refZ ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGather( usampler2DArrayShadow sampler, vec3 P, float refZ ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGather( samplerCubeShadow sampler, vec3 P, float refZ ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGather( isamplerCubeShadow sampler, vec3 P, float refZ ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGather( usamplerCubeShadow sampler, vec3 P, float refZ ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGather( samplerCubeArrayShadow sampler, vec4 P, float refZ ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGather( isamplerCubeArrayShadow sampler, vec4 P, float refZ ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGather( usamplerCubeArrayShadow sampler, vec4 P, float refZ ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGather( sampler2DRectShadow sampler, vec3 P, float refZ ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGather( isampler2DRectShadow sampler, vec3 P, float refZ ) {}

/**
 * gathers four texels from a texture
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param refZ Specifies the reference Z value used in the comparison for shadow forms. 
 */
vec4 textureGather( usampler2DRectShadow sampler, vec3 P, float refZ ) {}

