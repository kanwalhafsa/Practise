
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "../../../component/ui/button";

// const SignIn = () => {
//   return (
//     <div className="flex flex-col items-center py-10 mt-28 px-4 sm:px-8 md:px-16 lg:px-20">
//       {/* Nike Logo */}
//       <Image
//         src="/images/img2.png"
//         alt="Nike"
//         width={40}
//         height={10}
//         className="pb-5"
//       />

//       {/* Title */}
//       <h2 className="uppercase w-full sm:w-3/4 md:w-1/2 lg:w-1/3 text-center font-bold text-sm sm:text-base md:text-lg lg:text-xl pb-5">
//         YOUR ACCOUNT FOR EVERYTHING NIKE
//       </h2>

//       {/* Form */}
//       <form className="flex flex-col w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
//         {/* Email Input */}
//         <input
//           className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray text-sm md:text-base"
//           type="text"
//           placeholder="Email Address"
//         />

//         {/* Password Input */}
//         <input
//           className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray text-sm md:text-base"
//           type="password"
//           placeholder="Password"
//         />

//         {/* Remember Me and Forgot Password */}
//         <div className="flex justify-between items-center py-5 text-xs sm:text-sm md:text-base">
//           <div>
//             <input type="checkbox" id="remember" />
//             <label
//               className="ml-2 cursor-pointer text-text-secondary-gray text-[#8D8D8D]"
//               htmlFor="remember"
//             >
//               Keep me signed in
//             </label>
//           </div>
//           <div>
//             <a href="#" className="text-[#BCBCBC]">
//               Forgotten your password?
//             </a>
//           </div>
//         </div>

//         <div className="flex flex-col justify-center items-center mt-4">
//           <p className="text-[#8D8D8D] text-center text-xs sm:text-sm md:text-base">
//             By creating an account, you agree to Nike&apos;s
//             <u>Privacy <br /></u>
//           </p>
//           <p className="text-[#8D8D8D] text-center text-xs sm:text-sm md:text-base">
//             Policy and <u>Terms of Use</u>
//           </p>
//         </div>

//         {/* Sign In Button */}
//         <Button className="rounded-sm py-3 w-full mt-8 text-sm md:text-base">
//           SIGN IN
//         </Button>

//         {/* Join Us */}
//         <p className="text-center mt-4 text-xs sm:text-sm md:text-base">
//           <span className="text-text-secondary-gray">Not a Member? </span>
//           <Link className="underline" href="/joinus">
//             Join Us.
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default SignIn

// "use client"

// import React from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "../../../component/ui/button"
// import { useSignIn } from "@clerk/nextjs"
// import { useRouter } from "next/navigation"

// const SignIn = () => {
//   const { signIn, isLoaded, setActive } = useSignIn()
//   const router = useRouter()
//   const [email, setEmail] = React.useState("")
//   const [password, setPassword] = React.useState("")
//   const [error, setError] = React.useState("")

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!isLoaded) return

//     try {
//       const result = await signIn.create({
//         identifier: email,
//         password,
//       })

//       if (result.status === "complete") {
//         await setActive({ session: result.createdSessionId })
//         router.push("/joinus") // Redirect to the join us page
//       } else {
//         console.error("Sign in failed", result)
//         setError("Sign in failed. Please check your credentials.")
//       }
//     } catch (err: any) {
//       console.error("Error:", err.errors[0].message)
//       setError(err.errors[0].message)
//     }
//   }

//   return (
//     <div className="flex flex-col items-center py-10 mt-28 px-4 sm:px-8 md:px-16 lg:px-20">
//       <Image src="/images/img2.png" alt="Nike" width={40} height={10} className="pb-5" />
//       <h2 className="uppercase w-full sm:w-3/4 md:w-1/2 lg:w-1/3 text-center font-bold text-sm sm:text-base md:text-lg lg:text-xl pb-5">
//         YOUR ACCOUNT FOR EVERYTHING NIKE
//       </h2>
//       <form onSubmit={handleSubmit} className="flex flex-col w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
//         <input
//           className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray text-sm md:text-base"
//           type="email"
//           placeholder="Email Address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray text-sm md:text-base"
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//         <Button type="submit" className="rounded-sm py-3 w-full mt-8 text-sm md:text-base">
//           SIGN IN
//         </Button>
//       </form>
//       <p className="text-center mt-4 text-xs sm:text-sm md:text-base">
//         <span className="text-text-secondary-gray">Not a Member? </span>
//         <Link className="underline" href="/joinus">
//           Join Us.
//         </Link>
//       </p>
//     </div>
//   )
// }

// export default SignIn

"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../../../component/ui/button"
import { useSignIn, useUser, SignedOut, SignInButton, UserButton, SignedIn } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const SignIn = () => {
  const { signIn, isLoaded, setActive } = useSignIn()
  const { user, isSignedIn } = useUser()  // Adding useUser hook
  const router = useRouter()
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState("")

  // Redirect if the user is already signed in
  useEffect(() => {
    if (isSignedIn) {
      router.push("/joinus") // If user is signed in, redirect to joinus page
    }
  }, [isSignedIn, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isLoaded) return

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      })

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId })
        router.push("/joinus") // Redirect to the join us page
      } else {
        console.error("Sign in failed", result)
        setError("Sign in failed. Please check your credentials.")
      }
    } catch (err: any) {
      console.error("Error:", err.errors[0].message)
      setError(err.errors[0].message)
    }
  }

  return (
      
    <div className="flex flex-col items-center py-10 mt-28 px-4 sm:px-8 md:px-16 lg:px-20">
      <SignedIn>
      <div  className="text-center ">
        <UserButton />
        <h1 className="text-3xl font-bold ">Welcom to Nike</h1>
      </div>
      </SignedIn>
      <SignedOut>
      <Image src="/images/img2.png" alt="Nike" width={40} height={10} className="pb-5" />
      <h2 className="uppercase w-full sm:w-3/4 md:w-1/2 lg:w-1/3 text-center font-bold text-sm sm:text-base md:text-lg lg:text-xl pb-5">
        YOUR ACCOUNT FOR EVERYTHING NIKE
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray text-sm md:text-base"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray text-sm md:text-base"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <a href="#" className="text-[#BCBCBC]">
             Forgotten your password?
                          </a>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      </form>
        <div className="rounded py-3 w-32 mt-8 md:text-base text-center font-bold text-xl text-white bg-black hover:bg-gray-900 duration-300 cursor-pointer">
          
            <SignInButton mode="modal"/>
        
          </div>
      <p className="text-center mt-4 text-xs sm:text-sm md:text-base">
        <span className="text-text-secondary-gray">Not a Member? </span>
        <Link className="underline" href="/joinus">
          Join Us.
        </Link>
      </p>
          </SignedOut>
    </div>
  )
}

export default SignIn
