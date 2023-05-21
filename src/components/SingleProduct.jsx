import { Button, Typography, useTheme } from "@mui/material";

export const SingleProduct = () => {
  const imgURL = ''
  const title = 'Harina Organica'
  const price = 5
  const infoProduct = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo incidunt doloremque iure provident,'
  const imgEnterpriceURL = 'type: URL'
  const enterprice = 'SOSTENIBLE MEAL'
  const descEnterprice = 'ALIMENTOS SOSTENIBLES'

  // const imgURL = 'type: URL'
  // const title = 'type: String'
  // const price = 'type: Number'
  // const infoProduct = 'type: String'
  // const imgEnterpriceURL = 'type: URL'
  // const enterprice = 'type: String'
  // const descEnterprice = 'type: String'

  const theme = useTheme();

  return (
    <div>
      <picture>
        <img src={imgURL} alt={title} />
      </picture>
      <div>
        <div>
          <h1>{title}</h1>
        </div>

        <div>{}</div>

        <span>{`$${price}`}</span>

        <div className="flex">
          <img src={imgEnterpriceURL} alt={enterprice} />
          <div className="flex flex-col text-center ml-3">
            <Typography variant="h5" component="h3">
              {enterprice}
            </Typography>
            <Typography variant="subtitle2" component="p" style={{ color: theme.palette.grey['900'] }}>
              {descEnterprice}
            </Typography>
          </div>
        </div>

        <div className="">
          <Typography variant="h4" component="h4">
            Información Del Producto
          </Typography>
          <Typography variant="body1" component="p" style={{ color: theme.palette.grey['800'] }}>
            {infoProduct}
          </Typography>
        </div>

        <div className="flex gap-2 justify-center">
          <Button variant="outlined" className="border-2 hover:border-2">CANCELAR</Button>
          <Button variant="contained">COMPRAR</Button>
        </div>
      </div>
    </div>
  );
};