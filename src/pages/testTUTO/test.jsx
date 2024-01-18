import { useState } from "react"
import Card from "./button"
import Block from "../../components/block/block"

function Test() {

    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    }

    return (
        <Card onClick={updateCount}>
            {count}

            <Block bgColor="blue">
                <div>
                    
                    <h1>Hello WORLD !</h1>
                    <p>Je suis un p en dessous de hello world !</p>
                </div>

            </Block>


        </Card>
    )
}


export default Test