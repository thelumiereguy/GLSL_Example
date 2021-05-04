#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
    vec2 coords=(gl_FragCoord.xy/u_resolution);
    
    float yGradients=abs(sin(coords.x*3.14159*4.));
    float xGradients=abs(sin(coords.y*3.14159*4.));
    
    gl_FragColor=vec4(vec3(xGradients)*vec3(yGradients),1.);
}