import { FaLinkedin, FaGithub } from "react-icons/fa"

const footer = () => {
  return (
    <div className="flex items-center gap-3 p-4 border-t border-pink text-white">
        <p>&copy; Jerome Haynes 2022</p>
        <div className="flex gap-2">
            <a className="hover:text-pink" href="#">
                <FaLinkedin />
            </a>
            <a className="hover:text-pink" href="#">
                <FaGithub />
            </a>
        </div>
    </div>
  )
}

export default footer