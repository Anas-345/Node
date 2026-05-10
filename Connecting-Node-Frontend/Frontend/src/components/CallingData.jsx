import axios from 'axios'
export default function CallingData() {
    async function API_Call() {
        const data = await axios.get('http://localhost:3000/')
        console.log(data.data)
    }
    API_Call()
    return<>
    Hello
    </>
}