import { BoxComponent, Lesson08Component, ButtonComponent, InfoBoxComponent } from "./styles";


function Lesson08(){
    const styleObject = {
        fontSize: '42px', 
        color: 'red'
    }
    // 2 подход - inline styles
//    return (
        // <div>
        //     return <p style={{fontSize: '24px', color: 'blue'}}>Hello</p>
        //     <p style={styleObject}>Привет</p>
        //     <div style={styleObject}>Hello</div>
        // </div>

//    )

return (
    <Lesson08Component>
       <BoxComponent>My first emotion block</BoxComponent>
       <ButtonComponent mainButton>Custom button</ButtonComponent>
       <ButtonComponent>Custom button</ButtonComponent>
       <InfoBoxComponent>Info</InfoBoxComponent>

    </Lesson08Component>
)

}

export default Lesson08;