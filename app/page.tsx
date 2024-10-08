import NewTodoForm from '@/components/NewTodoForm'

const getData = async () => {
  await new Promise((res) => setTimeout(() => res(0), 2000))
  return { data: [1, 2, 3] }
}

const Home = async () => {
  const data = await getData()
  console.log(data)
  return <NewTodoForm />
}

export default Home
