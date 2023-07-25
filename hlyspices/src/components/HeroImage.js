import img_spices from "../img/spices.jpeg"

export default function HeroImage(){
    return(
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${img_spices})`, height: 400 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          <div className='d-flex justify-content-center align-items-center h-100 p-3'>
            <div className='text-white'>
              <h1 className='mb-3'>Les meilleurs epices pour toutes les occasions!</h1>
              <h4 className='mb-3'>seulement chez HLY Spices</h4>
              {/* <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Nos produits
              </a> */}
            </div>
          </div>
        </div>
      </div>
    )
}