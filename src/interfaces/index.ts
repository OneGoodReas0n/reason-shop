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
   price?: number;
};

type CardsArrayProps = {
   cards: CardProps[];
};

type SelectProps = {
   type: string;
};

type CaptionProps = TextComponentProps & HasPrice;
type CardProps = CaptionProps & ImageProps;
type CategoryProps = CardsArrayProps & TextComponentProps;

export { ImageProps, TextComponentProps, CaptionProps, CardProps, CategoryProps, SelectProps };
