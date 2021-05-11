#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float sides=6.;

float sideLength=.4;

void main(){
    vec2 normalizedCoords=gl_FragCoord.xy/u_resolution.xy-.5;
    float a=smoothstep(.0,.001,-normalizedCoords.x-(normalizedCoords.y)+1.5*sideLength);
    vec4 color=vec4(a);
    gl_FragColor=color;
}