#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

const float PI=3.14159265359;

mat2 rotate(float angle){
    return mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
}

float getflake(vec2 coord,float scale,float petals){
    float angle=abs(fract(atan(coord.y,coord.x)*(PI*(petals*.05)))-.5);
    return step(length(coord),scale-angle);
}

void main(){
    vec2 coord=gl_FragCoord.xy/u_resolution-.5;
    coord.x*=u_resolution.x/u_resolution.y;
    vec3 color=vec3(0.);
    coord*=rotate(u_time);
    float flake=getflake(
        (coord-(fract(coord.x+coord.y)))*rotate(u_time),
        .1,
        6.
    );
    
    color+=flake;
    gl_FragColor=vec4(color,1.);
}