
const PageTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => {

   return (
    <>
        <h1 className="text-5xl flex text-center flex-col font-bold">
            <span className="first-letter:text-blue-700">{title}</span>
        </h1>
        
        {subtitle && (
            <span className="mt-1 text-sm italic">{subtitle}</span>
        )}
    </>
)

}

export default PageTitle