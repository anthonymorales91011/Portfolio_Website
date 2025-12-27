import React, { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import './PosterModal.css'

/**
 * PosterModal component - Full-screen modal for viewing research posters
 * Supports both PDF and image formats, with keyboard navigation (ESC to close)
 * Prevents body scrolling when modal is open
 */
const PosterModal = ({ poster, isOpen, onClose }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close modal when ESC key is pressed
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen || !poster) return null

  const isPDF = poster.endsWith('.pdf')

  return (
    <div className="poster-modal-overlay" onClick={onClose}>
      <div className="poster-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="poster-modal-close" onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>
        <div className="poster-modal-body">
          {isPDF ? (
            <iframe
              src={poster}
              title="Poster Presentation"
              className="poster-iframe"
            />
          ) : (
            <img src={poster} alt="Poster Presentation" className="poster-image" />
          )}
        </div>
      </div>
    </div>
  )
}

export default PosterModal
