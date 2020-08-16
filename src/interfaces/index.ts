type ImageProps = {
   src: string;
   alt: string;
};

type TextComponentProps = {
   text: string;
   type?: string;
};

type HasPrice = {
   withPrice?: boolean;
   price?: string;
};

type CaptionProps = TextComponentProps & HasPrice;
type CategoryProps = TextComponentProps & ImageProps;

export { ImageProps, TextComponentProps, CaptionProps, CategoryProps };
