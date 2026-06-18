public with sharing class ContactController {
    string firstName;
    string email;
    public static void createContact(string firstName, String email) {
        Contact contact = new Contact();
        contact.firstName = firstName;
        contact.email = email;
        system.debug('contact===>',contact);
        insert contact;
    }
    
}