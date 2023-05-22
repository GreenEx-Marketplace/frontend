import { Button, IconButton, Rating, Typography } from '@mui/material';
import { AddShoppingCart, ThumbUp, Share} from '@mui/icons-material/esm';
import { Leaf, LeafGray } from './Icons';
import { EnterpriceCard } from './EnterpriceCard';

export const SingleProduct = () => {
  const imgURL = 'https://www.freshmart.pe/images/productos/63631.png'
  const title = 'Harina Organicaa'
  const price = 5
  const infoProduct = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo incidunt doloremque iure provident,'
  const imgEnterpriceURL = 'https://sds.uanl.mx/wp-content/uploads/2021/09/cropped-logo-uanl-sustentable-perforado.png'
  const enterprice = 'SOSTENIBLE MEAL'
  const descEnterprice = 'ALIMENTOS SOSTENIBLES'
  const rating = 4

  // const imgURL = 'type: URL'
  // const title = 'type: String'
  // const price = 'type: String'
  // const infoProduct = 'type: String'
  // const imgEnterpriceURL = 'type: URL'
  // const enterprice = 'type: String'
  // const descEnterprice = 'type: String'
  // const rating = 'type: Number'

  return (
    <div className='px-4 md:mt-10'>
        <div className='md:border-b-2 border-0 border-solid border-gray-400 md:flex md:items-top'>
          <picture className='flex justify-center'>
            <img src={imgURL} alt={title} className='w-60 self-start'/>
          </picture>
          <div >
          <div className='flex justify-between md:mt-5'>
            <Typography 
              variant='h1' 
              component='h1' 
              color='primary.dark'
            >
              {title}
            </Typography>

            <div className='flex h-max md:absolute top-52'>
              <IconButton aria-label="Bookmark" size="small" className='outline'>
                <ThumbUp fontSize='medium' />
              </IconButton>
              <IconButton aria-label="ShoppingCart" size="small">
                <AddShoppingCart fontSize='medium' />
              </IconButton>
              <IconButton aria-label="Shared" size="small">
                <Share fontSize='medium' />
              </IconButton>
            </div>
          </div>
      
          <div className='my-2'>
            <Rating 
              name='read-only' 
              value={rating} 
              readOnly 
              icon={<Leaf fontSize='inherit' />} 
              emptyIcon={<LeafGray fontSize='inherit' />}
            />
          </div>  

          <Typography 
            variant='h2' 
            component='span' 
            color='primary.dark'
            className='my-4 block'          
          >
            {`$${price.toFixed(2)} MXN`}
          </Typography>
          </div>  
        </div>

        <EnterpriceCard 
          imgEnterpriceURL={imgEnterpriceURL} 
          enterprice={enterprice} 
          descEnterprice={descEnterprice}
        />

        <div className='mb-10'>
          <Typography
            variant='h4' 
            component='h4'
            className='mb-3'
          >
            Información Del Producto
          </Typography>
          <Typography 
            variant='body1' 
            component='p' 
            color='grey.800'
            className='max-w-lg'
          >
            {infoProduct}
          </Typography>
        </div>

        <div className='flex gap-2 justify-center md:justify-start'>
          <Button 
            variant='outlined' 
            className='border-2 hover:border-2'
            size='large'
          >
            CANCELAR
          </Button>
          <Button 
            variant='contained'
            size='large'
          >
            COMPRAR
          </Button>
        </div>
    </div>
  );
};