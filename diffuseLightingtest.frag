#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

#define PI 3.14

vec3 P1ColorIn=vec3(1.,.5,0.);
vec3 P1ColorOut=vec3(1.,0.,0.);

void main(){
    // Normalize
    vec2 uv=gl_FragCoord.xy/u_resolution.xy;
    
    // Fasten time
    // increase frequency
    // Sin of result
    //Scale down sin values by 0.1
    float curve=.1*sin((10.22*uv.x)+(4.*u_time));
    
    // yet to check
    float lineAShape=smoothstep(1.-clamp(distance(curve+uv.y,.5)*1.,0.,1.),1.,.999);
    vec3 lineACol=(1.-lineAShape)-vec3(mix(P1ColorIn,P1ColorOut,lineAShape));
    
    gl_FragColor=vec4(lineACol,1.);
}
