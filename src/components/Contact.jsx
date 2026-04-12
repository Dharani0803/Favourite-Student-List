import { useState } from "react"

function Contact(){

  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (subscribed) return

    alert("Successfully subscribed")

    setSubscribed(true)
    setEmail("")
  }

    return(
    <div className="flex items-center justify-center my-10">

      <form onSubmit={handleSubmit} className="w-[60%]  p-10 text-center">

        <h1 className="text-3xl font-bold mb-4">
          Contact With Us <i class="fa-regular fa-envelope"></i>
        </h1>

        <p className=" mb-6">
          Enter your email to get updates and contact us.
        </p>

        <div className="flex justify-center gap-3">

          <input
            type="email"
            placeholder="Enter your email" required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg p-2 w-[60%] "
          />

          <button type="submit"
            disabled={subscribed}
            className={`px-5 rounded-lg text-white ${
              subscribed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#286eca] hover:bg-[#1F5AA6]"
            }`}>
            {subscribed ? "Subscribed" : "Subscribe"}
          </button>

        </div>

      </form>

    </div>
  );
}

export default Contact;
    