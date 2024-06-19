import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactHero = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Janni',
          from_email: form.email,
          to_email: 'harlequin1722@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false)
          alert('Vielen Dank für Ihre Nachricht. Ich werde mich so schnell wie möglich melden.')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.log(error)
          alert('Es ist etwas schief gelaufen.')
        }
      )
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
     <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className="text-4xl font-semibold mb-8">Kontakt</p>        
        <p></p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          
          <label className="flex flex-col">
            <span className="text-black font-bold mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Wie ist Ihr Name?"
              className="bg-gray py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-black font-bold mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Wie ist Ihre Email?"
              className="bg-gray py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-black font-bold mb-4">Nachricht</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Was ist Ihr Anliegen?"
              className="bg-gray py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-gray py-3 px-8 outline-none w-fit text-black font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Senden'}
          </button>

          <p>x Ich habe die Datenschutzerklärung gelesen und akzeptiert.</p>

        </form>     
      </div>
      
    </div>
  )
}

export default ContactHero
