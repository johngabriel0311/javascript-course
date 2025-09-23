'use strict';

// Modal Elements
const modalEl = document.querySelector('.modal');

// Overlay Modal
const overlayEl = document.querySelector('.overlay');

// Close Modal
const btnCloseModalEl = document.querySelector('.close-modal');

// Open Modal
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

const openModal = function () {
  // Remove hidden class/keyword in modal and overlay
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

const closeModal = function () {
  // Add hidden class/keyword in modal and overlay
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);
