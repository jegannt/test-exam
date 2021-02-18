const express = require('express')
const app = express()
const port = 3000



const Employee = [
  { id: 1, name: 'Employee1'},
  { id: 2, name: 'Employee2'},
  { id: 3, name: 'Employee3'},
  { id: 4, name: 'Employee4'},
]

app.get('/', (req, res) => {
  res.send('Hello WORLD!')
})

app.get('/api/Employee', (req,res) => {
  res.send(Employee);
});


app.get('/api/Employee/:id', (req,res) => {
   const Employ= Employee.find(E => E.id === parseInt(req.params.id));
  if (!Employ)  res.status(404).send('The Employee with the given ID was Not Found.');
  res.send(Employ);
  });

   


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


