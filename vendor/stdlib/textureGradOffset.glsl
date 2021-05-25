/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
vec4 textureGradOffset( sampler1D sampler, float P, float dPdx, float dPdy, int offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
ivec4 textureGradOffset( isampler1D sampler, float P, float dPdx, float dPdy, int offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
uvec4 textureGradOffset( usampler1D sampler, float P, float dPdx, float dPdy, int offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
vec4 textureGradOffset( sampler2D sampler, vec2 P, vec2 dPdx, vec2 dPdy, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
ivec4 textureGradOffset( isampler2D sampler, vec2 P, vec2 dPdx, vec2 dPdy, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
uvec4 textureGradOffset( usampler2D sampler, vec2 P, vec2 dPdx, vec2 dPdy, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
vec4 textureGradOffset( sampler3D sampler, vec3 P, vec3 dPdx, vec3 dPdy, ivec3 offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
ivec4 textureGradOffset( isampler3D sampler, vec3 P, vec3 dPdx, vec3 dPdy, ivec3 offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
uvec4 textureGradOffset( usampler3D sampler, vec3 P, vec3 dPdx, vec3 dPdy, ivec3 offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
vec4 textureGradOffset( sampler2DRect sampler, vec2 P, vec2 dPdx, vec2 dPdy, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
ivec4 textureGradOffset( isampler2DRect sampler, vec2 P, vec2 dPdx, vec2 dPdy, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
uvec4 textureGradOffset( usampler2DRect sampler, vec2 P, vec2 dPdx, vec2 dPdy, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
float textureGradOffset( sampler2DRectShadow sampler, vec3 P, vec2 dPdx, vec2 dPdy, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
float textureGradOffset( isampler2DRectShadow sampler, vec3 P, vec2 dPdx, vec2 dPdy, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
float textureGradOffset( usampler2DRectShadow sampler, vec3 P, vec2 dPdx, vec2 dPdy, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
float textureGradOffset( sampler1DShadow sampler, vec3 P, float dPdx, float dPdy, int offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
float textureGradOffset( sampler2DShadow sampler, vec3 P, vec2 dPdx, vec2 dPdy, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
vec4 textureGradOffset( sampler1DArray sampler, vec2 P, float dPdx, float dPdy, int offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
ivec4 textureGradOffset( isampler1DArray sampler, vec2 P, float dPdx, float dPdy, int offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
uvec4 textureGradOffset( usampler1DArray sampler, vec2 P, float dPdx, float dPdy, int offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
vec4 textureGradOffset( sampler2DArray sampler, vec3 P, vec2 dPdx, vec2 dPdy, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
ivec4 textureGradOffset( isampler2DArray sampler, vec3 P, vec2 dPdx, vec2 dPdy, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
uvec4 textureGradOffset( usampler2DArray sampler, vec3 P, vec2 dPdx, vec2 dPdy, ivec2 offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
float textureGradOffset( sampler1DArrayShadow sampler, vec3 P, float dPdx, float dPdy, int offset ) {}

/**
 * perform a texture lookup with explicit gradients and offset
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 * @param offset Specifies the offset to be applied to the texture coordinates before sampling. 
 */
float textureGradOffset( sampler2DArrayShadow sampler, vec3 P, vec2 dPdx, vec2 dPdy, ivec2 offset ) {}

