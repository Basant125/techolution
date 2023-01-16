import fetch from "node-fetch"

const allowCors = fn => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true)
  const allowedOrigins = [
    "http://localhost:8000",
    "https://dev.techolution.com",
    "https://techolution-qa.vercel.app",
    "https://techolution.vercel.app",
    "https://techolution.com",
    "https://www.techolution.com"
  ]
  const origin = req.headers.origin
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin)
  }
  res.setHeader("Access-Control-Allow-Methods", "POST")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  )
  if (req.method === "OPTIONS") {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

async function handler(request, response) {
  const URL = `${process.env.API_URL}/${process.env.HUBSPOT_ID}/${process.env.HUBSPOT_HASH}`
  const res = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(request.body),
    headers: { "Content-Type": "application/json" },
  })
  return response.status(res.status).send(res.statusText)
}

module.exports = allowCors(handler)
