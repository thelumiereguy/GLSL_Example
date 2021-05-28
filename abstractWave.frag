#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float noise1d(float v){
    return cos(v+cos(v*90.1415)*100.1415+u_time)*.5+.5;
}

float createRing(vec2 position,float pct,float radius){
    return
    smoothstep(radius,radius+.01,length(position))
    -step(radius+.03,length(position));
}

float getLength(vec2 position){
    vec2 newVector=vec2(
        position.x+cos(position.x),
        position.y+sin(position.y)
    );
    return step(1.02,length(position-newVector)*1.);
}

mat2 rotate(float angle){
    return mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
}

void main(){
    vec2 coord=gl_FragCoord.xy/u_resolution-.5;
    coord.x*=u_resolution.x/u_resolution.y;
    vec3 color=vec3(0.);
    float ring=createRing(coord,.1,.1);
    color+=ring;
    color+=getLength(coord*rotate(sin(u_time)));
    gl_FragColor=vec4(color,1.);
}