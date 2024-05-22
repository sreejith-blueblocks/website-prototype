import fs from 'fs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Validate input (you can add more validation logic here)

    // Read existing users from JSON file
    const usersData = JSON.parse(fs.readFileSync('./data/users.json'));
    const user = usersData.users.find(u => u.username === username);

    if (!user || user.password !== password) {
      res.status(401).json({ message: 'Invalid credentials' });
    } else {
      res.status(200).json({ message: 'Login successful!' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}