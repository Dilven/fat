import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getRecipe } from '../helpers/api';

export const Recipe = () => {
  const { id } = useParams<{id: string}>()
  const { data: recipe, isFetching } = useQuery(`receipt-${id}`, () => getRecipe(id))

  if (isFetching) {
    return <span>'xD'</span>;
  }

  return (
    <div>
      Recipe - {recipe?.title}
    </div>
  )
}