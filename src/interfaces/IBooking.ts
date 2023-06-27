export interface IBooking {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  paymentMethod: string;
  guests: IGuest[];
}

export interface IGuest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dni: string;
}
