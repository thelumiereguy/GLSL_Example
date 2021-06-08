#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

mat2 scale(vec2 scale){
    return mat2(scale.x,0.,0.,scale.y);
}

void main(){
    vec2 coord=(gl_FragCoord.xy*2.)/u_resolution-1.;
    coord.x*=u_resolution.x/u_resolution.y;
    vec3 color=vec3(0.);
    
    float scaledLength=ceil(length(coord)*(50.));
    color=vec3(
        scaledLength/(u_time),
        scaledLength/(u_time),
        scaledLength/(u_time)
    );
    gl_FragColor=vec4(color,1.);
}