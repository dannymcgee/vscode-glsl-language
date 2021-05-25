/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
vec4 textureGrad( sampler1D sampler, float P, float dPdx, float dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
ivec4 textureGrad( isampler1D sampler, float P, float dPdx, float dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
uvec4 textureGrad( usampler1D sampler, float P, float dPdx, float dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
vec4 textureGrad( sampler2D sampler, vec2 P, vec2 dPdx, vec2 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
ivec4 textureGrad( isampler2D sampler, vec2 P, vec2 dPdx, vec2 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
uvec4 textureGrad( usampler2D sampler, vec2 P, vec2 dPdx, vec2 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
vec4 textureGrad( sampler3D sampler, vec3 P, vec3 dPdx, vec3 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
ivec4 textureGrad( isampler3D sampler, vec3 P, vec3 dPdx, vec3 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
uvec4 textureGrad( usampler3D sampler, vec3 P, vec3 dPdx, vec3 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
vec4 textureGrad( samplerCube sampler, vec3 P, vec3 dPdx, vec3 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
ivec4 textureGrad( isamplerCube sampler, vec3 P, vec3 dPdx, vec3 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
uvec4 textureGrad( usamplerCube sampler, vec3 P, vec3 dPdx, vec3 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
vec4 textureGrad( sampler2DRect sampler, vec2 P, vec2 dPdx, vec2 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
ivec4 textureGrad( isampler2DRect sampler, vec2 P, vec2 dPdx, vec2 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
uvec4 textureGrad( usampler2DRect sampler, vec2 P, vec2 dPdx, vec2 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
float textureGrad( sampler2DRectShadow sampler, vec2 P, vec2 dPdx, vec2 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
float textureGrad( isampler2DRectShadow sampler, vec2 P, vec2 dPdx, vec2 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
float textureGrad( usampler2DRectShadow sampler, vec2 P, vec2 dPdx, vec2 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
float textureGrad( sampler1DShadow sampler, vec3 P, float dPdx, float dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
float textureGrad( sampler2DShadow sampler, vec3 P, vec2 dPdx, vec2 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
vec4 textureGrad( sampler1DArray sampler, vec2 P, float dPdx, float dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
ivec4 textureGrad( isampler1DArray sampler, vec2 P, float dPdx, float dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
uvec4 textureGrad( usampler1DArray sampler, vec2 P, float dPdx, float dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
vec4 textureGrad( sampler2DArray sampler, vec3 P, vec2 dPdx, vec2 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
ivec4 textureGrad( isampler2DArray sampler, vec3 P, vec2 dPdx, vec2 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
uvec4 textureGrad( usampler2DArray sampler, vec3 P, vec2 dPdx, vec2 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
float textureGrad( sampler1DArrayShadow sampler, vec3 P, float dPdx, float dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
vec4 textureGrad( samplerCubeArray sampler, vec4 P, vec3 dPdx, vec3 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
ivec4 textureGrad( isamplerCubeArray sampler, vec4 P, vec3 dPdx, vec3 dPdy ) {}

/**
 * perform a texture lookup with explicit gradients
 * 
 * @param sampler Specifies the sampler to which the texture from which texels will be retrieved is bound. 
 * @param P Specifies the texture coordinates at which texture will be sampled. 
 * @param dPdx Specifies the partial derivative of  with respect to window x. 
 * @param dPdy Specifies the partial derivative of  with respect to window y. 
 */
uvec4 textureGrad( usamplerCubeArray sampler, vec4 P, vec3 dPdx, vec3 dPdy ) {}

