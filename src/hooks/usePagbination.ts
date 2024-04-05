import React from 'react';

export const usePagination = (total: number, limit: number) => {
    return Math.ceil(total / limit)
}