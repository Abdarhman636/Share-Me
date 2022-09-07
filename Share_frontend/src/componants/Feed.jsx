import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';

const Feed = () => {
  const [loading, setLoading] = useState(false)
  const [pins, setPins] = useState(null)
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true)

    if(categoryId) {
      const query = searchQuery(categoryId)
      client.fetch(query).then((data) => {
        console.log(data)
        console.log(pins)
        setPins(data)
      setLoading(false)
      })
    } else {
      client.fetch(feedQuery).then((data) => {
        console.log(data)
        setPins(data)
        setLoading(false)
        console.log(pins)
      })
    }

  }, [categoryId])


  if (loading) {
    return (
      <Spinner message={`We are adding ideas to your feed!`} />
    );
  }

  if(!pins?.length) return <h2>No Pins avilable!</h2>

  return (
    <div>{pins && <MasonryLayout pins={pins} />}</div>
  )
}

export default Feed