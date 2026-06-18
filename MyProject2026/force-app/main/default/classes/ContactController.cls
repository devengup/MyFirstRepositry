public with sharing class ContactController {
    @AuraEnabled
    public static void createContact(string firstName, String email) {
        Contact con = new Contact();
        con.firstName = firstName;
        con.email = email;
        system.debug('contact===>'+con);
        insert con;
    }
    
}