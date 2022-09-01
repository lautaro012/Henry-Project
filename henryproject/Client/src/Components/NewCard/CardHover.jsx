import './CardHover.css'


export default function CardHover ({name, image}) {
    return (
        <div class="wrapper">

	{/* <h2><strong>All Games<span>( 4 )</span></strong></h2> */}

	<div class="cards">
		<figure class="card">
			<img src={`${image}`} alt='imagen'/>
			<figcaption>{name}</figcaption>
		</figure>

	</div>

</div>
    )
}