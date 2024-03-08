import Image from "next/image";

export default function Seminar() {
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
                    <Image src={"/sponsorsXYZ.png"} height={200} width={200}/>
                </div>
                <div class="flip-card-back">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                </div>
            </div>
        </div>
    )
}