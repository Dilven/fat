import { Card, Col, Row } from 'antd';
import React from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import { paths } from '../config/paths';
import { searchRecipes } from '../helpers/api'
import { useSearchParams } from '../hooks/useSearchParams';

export const Recipes = () => {
  const history = useHistory()
  const params = useSearchParams()
  const { data: recipes, error } = useQuery(['receipts', params], () => searchRecipes(params.query || ""))


  if (!recipes || error) {
    return <span>Sorry, api error. Couldn't fetch data</span>
  }

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {recipes.map(recipe => (
            <Col className="gutter-row" span={6} >
              <Card
                onClick={() => history.push(`${paths.recipts}/${recipe.id}`)}
                hoverable
                style={{ width: 240 }}
              >
                <Card.Meta title={recipe.title} description={recipe.servings} />
              </Card>
            </Col>
        ))}
      </Row>
    </div>
  )
}