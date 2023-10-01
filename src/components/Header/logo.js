import Link from "next/link"
import Image from "next/image"
import profileImage from '@/public/profile-image.png'

const Logo = () => {
  return (
    <Link href="/">
        <div>
            <Image src={profileImage} alt="CodeBucks" className="w-full h-auto rounded-full"/>
        </div>
    </Link>
  )
}

export default Logo