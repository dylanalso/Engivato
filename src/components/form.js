export default function Form() {
    return (
        <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="border border-gray-300 rounded-md p-2" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="border border-gray-300 rounded-md p-2" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" className="border border-gray-300 rounded-md p-2" />
            </div>
            <button type="submit" className="bg-orange-500 text-white rounded-md p-2">Submit</button>
        </form>
    );
}