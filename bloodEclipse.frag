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
    return max(
        length(position),
        length(
            position
            -vec2(
                noise1d(
                    position.x
                )
            )
        )
    );
}

void main(){
    vec2 coord=gl_FragCoord.xy/u_resolution-.5;
    coord.x*=u_resolution.x/u_resolution.y;
    vec3 color=vec3(0.);
    float ring=createRing(coord,.1,.1);
    color+=ring;
    color+=getLength(coord);
    vec3 newColor=vec3(color.x-sin(u_time),color.y*sin(u_time),color.z+sin(u_time));
    
    gl_FragColor=vec4(newColor,1.);
}