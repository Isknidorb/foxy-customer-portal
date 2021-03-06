/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A customer is the person who completes a transaction. Whenever a transaction takes place, a customer must be involved. If using a guest_checkout, an anonymous customer will be created with each transaction.
 */
export type Customer = {
  /**
   * Full creation date (ISO format).
   */
  date_created: string;
  /**
   * Full modification date (ISO format).
   */
  date_modified: string;
} & {
  /**
   * The FoxyCart customer id, useful for Single Sign On integrations.
   */
  id: number;
  /**
   * The date of the last time this customer authenticated with the FoxyCart checkout.
   */
  last_login_date: string;
  /**
   * The customer's given name.
   */
  first_name: string;
  /**
   * The customer's surname.
   */
  last_name: string;
  /**
   * The customer's email address. This is used as the login
   * to the FoxyCart checkout for this customer.
   */
  email: string;
  /**
   * A tax identification number for this customer.
   */
  tax_id: string;
  /**
   * If this customer checks out as a guest, this will be set to true.
   * Once it is set, it can not be changed.
   */
  is_anonymous: boolean;
};
