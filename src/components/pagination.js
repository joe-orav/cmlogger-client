import React from "react"
import Pagination from "react-bootstrap/Pagination"

export default ({ numberOfPages, activePage, onPageChange }) => {
  return (
    <Pagination className="mt-4">
      <Pagination.First onClick={() => onPageChange(1)} />
      <Pagination.Prev
        onClick={() => {
          if (activePage !== 1) onPageChange(activePage - 1)
        }}
      />
      {Array.from(Array(numberOfPages).keys()).map((num) => (
        <Pagination.Item
          key={num + 1}
          active={activePage === num + 1}
          onClick={() => onPageChange(num + 1)}
        >
          {num + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() => {
          if (activePage !== numberOfPages) onPageChange(activePage + 1)
        }}
      />
      <Pagination.Last onClick={() => onPageChange(numberOfPages)} />
    </Pagination>
  )
}
