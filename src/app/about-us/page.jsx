import Image from "next/image";

const page = () => {
    return (
        <div className="flex items-center mx-auto">
            <div className="text-center">
                <Image src="/lock.png" width="200" height="200" alt="" className="mx-auto" />
                <h3 className="text-2xl font-bold">Protected Page</h3>
                <p className="text-sm my-3">Password</p>
                <input type="text" placeholder="Enter your password" className="input input-bordered w-4/5 max-w-xs" />
                <button className="btn btn-info text-white w-4/5 my-4">Submit</button>
            </div>
        </div>
    );
};

export default page;