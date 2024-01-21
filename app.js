$(document).ready(function () {
  const contactList = $("#contactList");
  const searchInput = $("#searchInput");
  const addContactBtn = $("#addContactBtn");
  const contactModal = $("#contactModal");
  const contactForm = $("#contactForm");
  const closeBtn = $(".close");

  addContactBtn.click(function () {
    contactForm[0].reset();
    contactModal.show();
  });

  closeBtn.click(function () {
    contactModal.hide();
  });

  contactForm.submit(function (event) {
    event.preventDefault();
    const name = $("#name").val();
    const surname = $("#surname").val();
    const phoneNumber = $("#phoneNumber").val();
    const address = $("#address").val();

    if (name && surname && phoneNumber && address) {
      addContact(name, surname, phoneNumber, address);
      contactModal.hide();
    } else {
      alert("Please fill in all fields.");
    }
  });

  function addContact(name, surname, phoneNumber, address) {
    const contactItem = $("<li>");
    contactItem.html(`
            <span>${name} ${surname}</span>
            <span>${phoneNumber}</span>
            <span>${address}</span>
            <button class="delete-btn">Delete</button>
        `);

    contactList.append(contactItem);

    $(".delete-btn", contactItem).click(function () {
      contactItem.remove();
    });
  }

  searchInput.keyup(function () {
    const searchText = searchInput.val().toLowerCase();
    const contacts = contactList.children();

    contacts.each(function () {
      const contact = $(this);
      const contactText = contact.text().toLowerCase();

      if (contactText.includes(searchText)) {
        contact.show();
      } else {
        contact.hide();
      }
    });
  });
});
