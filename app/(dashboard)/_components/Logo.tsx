import Image from "next/image";

const Logo = () => {
    return (
        <Image
            height={50}
            width={50}
            alt="Logo"
            src="./Logo.svg"
        />
    )
}

export default Logo