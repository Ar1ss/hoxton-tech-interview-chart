
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import './App.css'
const studentData = [
  {
    name: 'Stephen',
    submissions: {
      beavers: 3,
      stars: 2,
    }
  },
  {
    name: 'Eduardo',
    submissions: {
      beavers: 7,
      stars: 1,
    }
  },
  {
    name: 'Pepe',
    submissions: {
      beavers: 6,
      stars: 9,
    }
  },
  {
    name: 'Gigachad',
    submissions: {
      beavers: 0,
      stars: 10,
    }
  },
]

// Using the Recharted library, create a graph as similar as you can, to the one in the #Classroom

function App() {
  return <>
    <BarChart width={600} height={300} data={studentData}>
      <Bar dataKey="submissions.beavers" fill="#FF8000" />
      <Bar dataKey="submissions.stars" fill='#FFA07A' />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </BarChart>


  </>

}

export default App
