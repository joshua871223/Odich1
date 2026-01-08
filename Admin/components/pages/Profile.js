import React, { useContext } from 'react';
import {
    Typography,
    Box,
    Avatar,
    Paper,
    Grid,
    Divider,
} from '@mui/material';
import { AuthContext } from '../../context/AuthContext';

const imgUrl =
    'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg';

export default function Profile(props) {
    const { user } = useContext(AuthContext);

    if (!user) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '400px',
                }}
            >
                <Typography>Loading profile...</Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                padding: 3,
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                Profile
            </Typography>
            
            <Paper
                elevation={2}
                sx={{
                    padding: 4,
                    borderRadius: 2,
                }}
            >
                <Grid container spacing={4}>
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            <Avatar
                                src={imgUrl}
                                alt={`${user?.firstName} ${user?.lastName}`}
                                sx={{
                                    width: 150,
                                    height: 150,
                                }}
                            />
                            <Typography variant="h5" component="h2">
                                {user?.firstName} {user?.lastName}
                            </Typography>
                            {user?.roles && user.roles.length > 0 && (
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'text.secondary',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    {user.roles.join(', ')}
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={9}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Divider />
                            
                            <Box>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        color: 'text.secondary',
                                        marginBottom: 0.5,
                                    }}
                                >
                                    Email
                                </Typography>
                                <Typography variant="body1">
                                    {user?.email || 'N/A'}
                                </Typography>
                            </Box>
                            
                            <Divider />
                            
                            <Box>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        color: 'text.secondary',
                                        marginBottom: 0.5,
                                    }}
                                >
                                    First Name
                                </Typography>
                                <Typography variant="body1">
                                    {user?.firstName || 'N/A'}
                                </Typography>
                            </Box>
                            
                            <Divider />
                            
                            <Box>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        color: 'text.secondary',
                                        marginBottom: 0.5,
                                    }}
                                >
                                    Last Name
                                </Typography>
                                <Typography variant="body1">
                                    {user?.lastName || 'N/A'}
                                </Typography>
                            </Box>
                            
                            <Divider />
                            
                            {user?.company && (
                                <>
                                    <Box>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                color: 'text.secondary',
                                                marginBottom: 0.5,
                                            }}
                                        >
                                            Company
                                        </Typography>
                                        <Typography variant="body1">
                                            {user.company.name || 'N/A'}
                                        </Typography>
                                    </Box>
                                    
                                    <Divider />
                                </>
                            )}
                            
                            <Box>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        color: 'text.secondary',
                                        marginBottom: 0.5,
                                    }}
                                >
                                    Account Status
                                </Typography>
                                <Typography variant="body1">
                                    {user?.isActivated ? 'Activated' : 'Not Activated'}
                                </Typography>
                            </Box>
                            
                            {user?.confirmAuthStatus !== undefined && (
                                <>
                                    <Divider />
                                    <Box>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                color: 'text.secondary',
                                                marginBottom: 0.5,
                                            }}
                                        >
                                            Authentication Status
                                        </Typography>
                                        <Typography variant="body1">
                                            {user?.confirmAuthStatus
                                                ? 'Verified'
                                                : 'Not Verified'}
                                        </Typography>
                                    </Box>
                                </>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

